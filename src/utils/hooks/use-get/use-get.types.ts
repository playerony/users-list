export interface State<R> {
  results: R | null;
  hasError: boolean;
  isLoading: boolean;
}
