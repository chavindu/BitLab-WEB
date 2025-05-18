import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const portfolioSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  category: z.string().min(1, 'Category is required'),
  image_url: z.string().url('Must be a valid URL'),
  technologies: z.array(z.string()).min(1, 'At least one technology is required'),
});

type PortfolioFormData = z.infer<typeof portfolioSchema>;

const AdminPortfolio = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<PortfolioFormData>({
    resolver: zodResolver(portfolioSchema),
  });

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error: any) {
      toast.error('Error fetching projects');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: PortfolioFormData) => {
    try {
      if (isEditing && currentProject) {
        const { error } = await supabase
          .from('portfolio')
          .update(data)
          .eq('id', currentProject.id);

        if (error) throw error;
        toast.success('Project updated successfully');
      } else {
        const { error } = await supabase
          .from('portfolio')
          .insert([data]);

        if (error) throw error;
        toast.success('Project created successfully');
      }

      reset();
      setIsEditing(false);
      setCurrentProject(null);
      fetchProjects();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleEdit = (project: any) => {
    setCurrentProject(project);
    setIsEditing(true);
    reset(project);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;

    try {
      const { error } = await supabase
        .from('portfolio')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Project deleted successfully');
      fetchProjects();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Portfolio</h1>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add New Project
          </button>
        )}
      </div>

      {isEditing && (
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {currentProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            <button
              onClick={() => {
                setIsEditing(false);
                setCurrentProject(null);
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
              <label className="form-label" htmlFor="image_url">Image URL</label>
              <input
                type="url"
                id="image_url"
                className="form-input"
                {...register('image_url')}
              />
              {errors.image_url && (
                <p className="mt-1 text-sm text-red-500">{errors.image_url.message}</p>
              )}
            </div>

            <div>
              <label className="form-label">Technologies</label>
              <div className="space-y-2">
                {/* Add technology input fields dynamically */}
              </div>
              {errors.technologies && (
                <p className="mt-1 text-sm text-red-500">{errors.technologies.message}</p>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setCurrentProject(null);
                  reset();
                }}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {currentProject ? 'Update Project' : 'Create Project'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg bg-white shadow-md dark:bg-gray-800"
          >
            <img
              src={project.image_url}
              alt={project.title}
              className="h-48 w-full rounded-t-lg object-cover"
            />
            <div className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.category}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="rounded-full bg-primary-100 px-2 py-1 text-xs text-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPortfolio;