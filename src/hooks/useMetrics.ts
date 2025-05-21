import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export interface Metric {
  id: string;
  label: string;
  value: string;
}

export function useMetrics() {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const { data, error } = await supabase
          .from('metrics')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) throw error;
        setMetrics(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMetrics();
  }, []);

  return { metrics, isLoading, error };
}