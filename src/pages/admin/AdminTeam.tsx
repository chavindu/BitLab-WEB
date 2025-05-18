import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const teamMemberSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  position: z.string().min(1, 'Position is required'),
  bio: z.string().min(1, 'Bio is required'),
  image_url: z.string().url('Must be a valid URL'),
});

type TeamMemberFormData = z.infer<typeof teamMemberSchema>;

const AdminTeam = () => {
  const [members, setMembers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentMember, setCurrentMember] = useState<any>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TeamMemberFormData>({
    resolver: zodResolver(teamMemberSchema),
  });

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMembers(data || []);
    } catch (error: any) {
      toast.error('Error fetching team members');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: TeamMemberFormData) => {
    try {
      if (isEditing && currentMember) {
        const { error } = await supabase
          .from('team_members')
          .update(data)
          .eq('id', currentMember.id);

        if (error) throw error;
        toast.success('Team member updated successfully');
      } else {
        const { error } = await supabase
          .from('team_members')
          .insert([data]);

        if (error) throw error;
        toast.success('Team member added successfully');
      }

      reset();
      setIsEditing(false);
      setCurrentMember(null);
      fetchMembers();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleEdit = (member: any) => {
    setCurrentMember(member);
    setIsEditing(true);
    reset(member);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this team member?')) return;

    try {
      const { error } = await supabase
        .from('team_members')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Team member deleted successfully');
      fetchMembers();
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
        <h1 className="text-2xl font-bold">Manage Team</h1>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Team Member
          </button>
        )}
      </div>

      {isEditing && (
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {currentMember ? 'Edit Team Member' : 'Add Team Member'}
            </h2>
            <button
              onClick={() => {
                setIsEditing(false);
                setCurrentMember(null);
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
              <label className="form-label" htmlFor="position">Position</label>
              <input
                type="text"
                id="position"
                className="form-input"
                {...register('position')}
              />
              {errors.position && (
                <p className="mt-1 text-sm text-red-500">{errors.position.message}</p>
              )}
            </div>

            <div>
              <label className="form-label" htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                className="form-input"
                rows={4}
                {...register('bio')}
              />
              {errors.bio && (
                <p className="mt-1 text-sm text-red-500">{errors.bio.message}</p>
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

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setCurrentMember(null);
                  reset();
                }}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {currentMember ? 'Update Member' : 'Add Member'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div
            key={member.id}
            className="rounded-lg bg-white shadow-md dark:bg-gray-800"
          >
            <img
              src={member.image_url}
              alt={member.name}
              className="h-48 w-full rounded-t-lg object-cover"
            />
            <div className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    {member.position}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(member)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTeam;