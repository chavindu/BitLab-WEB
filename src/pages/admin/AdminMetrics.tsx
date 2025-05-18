import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const metricSchema = z.object({
  label: z.string().min(1, 'Label is required'),
  value: z.string().min(1, 'Value is required'),
});

type MetricFormData = z.infer<typeof metricSchema>;

const AdminMetrics = () => {
  const [metrics, setMetrics] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentMetric, setCurrentMetric] = useState<any>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<MetricFormData>({
    resolver: zodResolver(metricSchema),
  });

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const { data, error } = await supabase
        .from('metrics')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMetrics(data || []);
    } catch (error: any) {
      toast.error('Error fetching metrics');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: MetricFormData) => {
    try {
      if (isEditing && currentMetric) {
        const { error } = await supabase
          .from('metrics')
          .update(data)
          .eq('id', currentMetric.id);

        if (error) throw error;
        toast.success('Metric updated successfully');
      } else {
        const { error } = await supabase
          .from('metrics')
          .insert([data]);

        if (error) throw error;
        toast.success('Metric added successfully');
      }

      reset();
      setIsEditing(false);
      setCurrentMetric(null);
      fetchMetrics();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleEdit = (metric: any) => {
    setCurrentMetric(metric);
    setIsEditing(true);
    reset(metric);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this metric?')) return;

    try {
      const { error } = await supabase
        .from('metrics')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Metric deleted successfully');
      fetchMetrics();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Metrics</h1>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Metric
          </button>
        )}
      </div>

      {isEditing && (
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {currentMetric ? 'Edit Metric' : 'Add Metric'}
            </h2>
            <button
              onClick={() => {
                setIsEditing(false);
                setCurrentMetric(null);
                reset();
              }}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="form-label" htmlFor="label">Label</label>
              <input
                type="text"
                id="label"
                className="form-input"
                {...register('label')}
              />
              {errors.label && (
                <p className="mt-1 text-sm text-red-500">{errors.label.message}</p>
              )}
            </div>

            <div>
              <label className="form-label" htmlFor="value">Value</label>
              <input
                type="text"
                id="value"
                className="form-input"
                {...register('value')}
              />
              {errors.value && (
                <p className="mt-1 text-sm text-red-500">{errors.value.message}</p>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setCurrentMetric(null);
                  reset();
                }}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {currentMetric ? 'Update Metric' : 'Add Metric'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-3xl font-bold text-primary-600">{metric.value}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(metric)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(metric.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMetrics;