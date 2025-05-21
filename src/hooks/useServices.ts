import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: string;
}

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) throw error;
        setServices(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchServices();
  }, []);

  return { services, isLoading, error };
}