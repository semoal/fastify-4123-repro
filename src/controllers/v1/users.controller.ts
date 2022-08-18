import { TypedPaginatedResponse } from "src/utils/typedResponses";

// just for demoing purposes
type User = unknown;
enum UserType {
  "admin",
  "user",
}
type SearchParams = {
  page: number;
  userType?: UserType[];
  userId?: string;
  limit: number;
};
export async function search(
  params: SearchParams
): TypedPaginatedResponse<User[]> {
  return {
    data: [],
    pagination: {
      count: [].length,
      totalCount: 0,
    },
  };
}
