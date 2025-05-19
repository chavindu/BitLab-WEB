import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const serviceSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  icon: z.string().min(1, 'Icon is required'),
  category: z.string().min(1, 'Category is required'),
  features: z.array(z.string()).min(1, 'At least one feature is required'),
});

type ServiceFormData = z.infer<typeof serviceSchema>;

const AdminServices = () => {
  const [services, setServices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentService, setCurrentService] = useState<any>(null);
  const [features, setFeatures] = useState<string[]>(['']);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setServices(data || []);
    } catch (error: any) {
      toast.error('Error fetching services');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: ServiceFormData) => {
    try {
      const serviceData = {
        ...data,
        features: features.filter(feature => feature.trim() !== '')
      };

      if (isEditing && currentService) {
        const { error } = await supabase
          .from('services')
          .update(serviceData)
          .eq('id', currentService.id);

        if (error) throw error;
        toast.success('Service updated successfully');
      } else {
        const { error } = await supabase
          .from('services')
          .insert([serviceData]);

        if (error) throw error;
        toast.success('Service created successfully');
      }

      reset();
      setIsEditing(false);
      setCurrentService(null);
      setFeatures(['']);
      fetchServices();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleEdit = (service: any) => {
    setCurrentService(service);
    setIsEditing(true);
    setFeatures(service.features);
    reset({
      title: service.title,
      description: service.description,
      icon: service.icon,
      category: service.category,
      features: service.features,
    });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;

    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Service deleted successfully');
      fetchServices();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const addFeature = () => {
    setFeatures([...features, '']);
  };

  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Services</h1>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add New Service
          </button>
        )}
      </div>

      {isEditing && (
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {currentService ? 'Edit Service' : 'Add New Service'}
            </h2>
            <button
              onClick={() => {
                setIsEditing(false);
                setCurrentService(null);
                setFeatures(['']);
                reset();
              }}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="form-label" htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                className="form-input"
                {...register('title')}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>

            <div>
              <label className="form-label" htmlFor="description">Description</label>
              <textarea
                id="description"
                className="form-input"
                rows={4}
                {...register('description')}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
              )}
            </div>

            <div>
              <label className="form-label" htmlFor="icon">Icon</label>
              <input
                type="text"
                id="icon"
                className="form-input"
                {...register('icon')}
              />
              {errors.icon && (
                <p className="mt-1 text-sm text-red-500">{errors.icon.message}</p>
              )}
            </div>

            <div>
              <label className="form-label" htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                className="form-input"
                {...register('category')}
              />
              {errors.category && (
                <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
              )}
            </div>

            <div>
              <label className="form-label">Features</label>
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      className="form-input"
                      value={feature}
                      onChange={(e) => updateFeature(index, e.target.value)}
                      placeholder={`Feature ${index + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addFeature}
                  className="btn btn-outline inline-flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add Feature
                </button>
              </div>
              {errors.features && (
                <p className="mt-1 text-sm text-red-500">{errors.features.message}</p>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setCurrentService(null);
                  setFeatures(['']);
                  reset();
                }}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {currentService ? 'Update Service' : 'Create Service'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {service.category}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(service)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
            <div className="space-y-1">
              {service.features.map((feature: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <span>•</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminServices;