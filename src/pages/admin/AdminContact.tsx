import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const contactSchema = z.object({
  address: z.string().min(1, 'Address is required'),
  map_url: z.string().url('Must be a valid URL'),
  phone_numbers: z.array(z.string()).min(1, 'At least one phone number is required'),
  email: z.string().email('Must be a valid email'),
  business_hours: z.string().min(1, 'Business hours are required'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const AdminContact = () => {
  const [contactInfo, setContactInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState<string[]>(['']);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_info')
        .select('*')
        .single();

      if (error) throw error;
      if (data) {
        setContactInfo(data);
        setPhoneNumbers(data.phone_numbers);
      }
    } catch (error: any) {
      toast.error('Error fetching contact information');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const contactData = {
        ...data,
        phone_numbers: phoneNumbers.filter(phone => phone.trim() !== '')
      };

      if (contactInfo) {
        const { error } = await supabase
          .from('contact_info')
          .update(contactData)
          .eq('id', contactInfo.id);

        if (error) throw error;
        toast.success('Contact information updated successfully');
      } else {
        const { error } = await supabase
          .from('contact_info')
          .insert([contactData]);

        if (error) throw error;
        toast.success('Contact information created successfully');
      }

      setIsEditing(false);
      fetchContactInfo();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    if (contactInfo) {
      reset(contactInfo);
      setPhoneNumbers(contactInfo.phone_numbers);
    }
  };

  const addPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, '']);
  };

  const removePhoneNumber = (index: number) => {
    setPhoneNumbers(phoneNumbers.filter((_, i) => i !== index));
  };

  const updatePhoneNumber = (index: number, value: string) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = value;
    setPhoneNumbers(newPhoneNumbers);
  };

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Contact Information</h1>
        {!isEditing && (
          <button
            onClick={handleEdit}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Pencil className="h-4 w-4" />
            Edit Contact Info
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="form-label" htmlFor="address">Address</label>
              <textarea
                id="address"
                className="form-input"
                rows={3}
                {...register('address')}
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
              )}
            </div>

            <div>
              <label className="form-label" htmlFor="map_url">Map URL</label>
              <input
                type="url"
                id="map_url"
                className="form-input"
                {...register('map_url')}
              />
              {errors.map_url && (
                <p className="mt-1 text-sm text-red-500">{errors.map_url.message}</p>
              )}
            </div>

            <div>
              <label className="form-label">Phone Numbers</label>
              <div className="space-y-2">
                {phoneNumbers.map((phone, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="tel"
                      className="form-input"
                      value={phone}
                      onChange={(e) => updatePhoneNumber(index, e.target.value)}
                      placeholder="Phone number"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoneNumber(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addPhoneNumber}
                  className="btn btn-outline inline-flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add Phone Number
                </button>
              </div>
              {errors.phone_numbers && (
                <p className="mt-1 text-sm text-red-500">{errors.phone_numbers.message}</p>
              )}
            </div>

            <div>
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="form-label" htmlFor="business_hours">Business Hours</label>
              <textarea
                id="business_hours"
                className="form-input"
                rows={3}
                {...register('business_hours')}
              />
              {errors.business_hours && (
                <p className="mt-1 text-sm text-red-500">{errors.business_hours.message}</p>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  if (contactInfo) {
                    setPhoneNumbers(contactInfo.phone_numbers);
                  }
                  reset();
                }}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      ) : contactInfo ? (
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">Address</h3>
              <p className="text-gray-600 dark:text-gray-400">{contactInfo.address}</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">Map URL</h3>
              <a
                href={contactInfo.map_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                {contactInfo.map_url}
              </a>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">Phone Numbers</h3>
              <ul className="space-y-1">
                {contactInfo.phone_numbers.map((phone: string, index: number) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400">
                    {phone}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">{contactInfo.email}</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">Business Hours</h3>
              <p className="whitespace-pre-line text-gray-600 dark:text-gray-400">
                {contactInfo.business_hours}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-400">No contact information found.</p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 btn btn-primary"
          >
            Add Contact Information
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminContact;