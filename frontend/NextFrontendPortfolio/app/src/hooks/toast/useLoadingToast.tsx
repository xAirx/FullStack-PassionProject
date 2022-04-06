import { useToasterStore } from 'react-hot-toast';

/**
 * Hook to get information whether something is loading
 * @component
 * @example const isLoading = useLoadingToast();
 * @see useToasterStore
 * @returns true if there is a loading toast
 * @todo add more code
 * @category Hooks
 * @markdown 🔄
 */

export default function useLoadingToast(): boolean {
  const { toasts } = useToasterStore();
  const isLoading = toasts.some((toast) => toast.type === 'loading');
  return isLoading;
}
