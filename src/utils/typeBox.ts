import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import type {
  FastifyRequest,
  RawRequestDefaultExpression,
  RawServerDefault,
} from "fastify";
import type { RouteGenericInterface } from "fastify/types/route";

export type FastifyRequestTypebox<TSchema> = FastifyRequest<
  RouteGenericInterface,
  RawServerDefault,
  RawRequestDefaultExpression<RawServerDefault>,
  TSchema,
  TypeBoxTypeProvider
>;
