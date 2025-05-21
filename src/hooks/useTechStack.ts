import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export interface TechStackItem {
  id: string;
  category: string;
  name: string;
  icon: string;
}

export function useTechStack() {
  const [techStack, setTechStack] = useState<TechStackItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTechStack() {
      try {
        const { data, error } = await supabase
          .from('tech_stack')
          .select('*')
          .order('category', { ascending: true });

        if (error) throw error;
        setTechStack(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTechStack();
  }, []);

  return { techStack, isLoading, error };
}