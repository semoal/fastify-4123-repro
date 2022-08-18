export type TypedResponse<T> = Promise<{
  data: T;
}>;

export type TypedCursorResponse<T> = Promise<{
  data: T;
  nextCursor: {
    id: string | null;
  };
}>;

export type TypedPaginatedResponse<T> = Promise<{
  data: T;
  pagination: {
    totalCount: number;
    count: number;
  };
}>;

export type PaginatedQuery<
  ExtraQueryString extends Record<string, unknown> = Record<string, unknown>
> = {
  Querystring: {
    page: number;
    limit: number;
  } & ExtraQueryString;
};
