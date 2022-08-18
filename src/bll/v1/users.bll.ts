import { Type } from "@sinclair/typebox";
import * as usersController from "src/controllers/v1/users.controller";
import { FastifyRequestTypebox } from "src/utils/typeBox";
import { TypedPaginatedResponse } from "src/utils/typedResponses";

// just for reproducing the issue
enum UserType {
  "admin",
  "user",
}
const DEFAULT_PAGINATION = Type.Object({
  page: Type.Number(),
  limit: Type.Number(),
});
export const searchJsonSchema = {
  querystring: Type.Intersect([
    DEFAULT_PAGINATION,
    Type.Object({
      userId: Type.Optional(Type.String()),
      userType: Type.Optional(Type.Array(Type.Enum(UserType))),
    }),
  ]),
};
export async function search(
  req: FastifyRequestTypebox<typeof searchJsonSchema>
): TypedPaginatedResponse<any[]> {
  const { page, limit, userType, userId } = req.query;
  return usersController.search({
    userId,
    page,
    limit,
    userType,
  });
}
