import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const techStackSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  category: z.string().min(1, 'Category is required'),
  icon: z.string().min(1, 'Icon is required'),
});

type TechStackFormData = z.infer<typeof techStackSchema>;

const AdminTechStack = () => {
  const [techStack, setTechStack] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTech, setCurrentTech] = useState<any>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TechStackFormData>({
    resolver: zodResolver(techStackSchema),
  });

  useEffect(() => {
    fetchTechStack();
  }, []);

  const fetchTechStack = async () => {
    try {
      const { data, error } = await supabase
        .from('tech_stack')
        .select('*')
        .order('category', { ascending: true });

      if (error) throw error;
      setTechStack(data || []);
    } catch (error: any) {
      toast.error('Error fetching tech stack');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: TechStackFormData) => {
    try {
      if (isEditing && currentTech) {
        const { error } = await supabase
          .from('tech_stack')
          .update(data)
          .eq('id', currentTech.id);

        if (error) throw error;
        toast.success('Technology updated successfully');
      } else {
        const { error } = await supabase
          .from('tech_stack')
          .insert([data]);

        if (error) throw error;
        toast.success('Technology added successfully');
      }

      reset();
      setIsEditing(false);
      setCurrentTech(null);
      fetchTechStack();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleEdit = (tech: any) => {
    setCurrentTech(tech);
    setIsEditing(true);
    reset(tech);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this technology?')) return;

    try {
      const { error } = await supabase
        .from('tech_stack')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Technology deleted successfully');
      fetchTechStack();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  // Group tech stack by category
  const groupedTechStack = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Tech Stack</h1>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Technology
          </button>
        )}
      </div>

      {isEditing && (
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {currentTech ? 'Edit Technology' : 'Add Technology'}
            </h2>
            <button
              onClick={() => {
                setIsEditing(false);
                setCurrentTech(null);
                reset();
              }}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="form-label" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                {...register('name')}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
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

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setCurrentTech(null);
                  reset();
                }}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {currentTech ? 'Update Technology' : 'Add Technology'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-8">
        {Object.entries(groupedTechStack).map(([category, technologies]) => (
          <div key={category}>
            <h2 className="mb-4 text-xl font-semibold capitalize">{category}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((tech) => (
                <div
                  key={tech.id}
                  className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30">
                        <span className="text-lg text-primary-600 dark:text-primary-400">
                          {tech.icon}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold">{tech.name}</h3>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(tech)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(tech.id)}
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
        ))}
      </div>
    </div>
  );
};

export default AdminTechStack;