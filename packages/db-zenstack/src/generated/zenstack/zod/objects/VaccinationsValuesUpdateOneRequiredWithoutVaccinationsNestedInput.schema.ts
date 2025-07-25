/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { VaccinationsValuesCreateWithoutVaccinationsInputObjectSchema } from './VaccinationsValuesCreateWithoutVaccinationsInput.schema';
import { VaccinationsValuesUncheckedCreateWithoutVaccinationsInputObjectSchema } from './VaccinationsValuesUncheckedCreateWithoutVaccinationsInput.schema';
import { VaccinationsValuesCreateOrConnectWithoutVaccinationsInputObjectSchema } from './VaccinationsValuesCreateOrConnectWithoutVaccinationsInput.schema';
import { VaccinationsValuesUpsertWithoutVaccinationsInputObjectSchema } from './VaccinationsValuesUpsertWithoutVaccinationsInput.schema';
import { VaccinationsValuesWhereUniqueInputObjectSchema } from './VaccinationsValuesWhereUniqueInput.schema';
import { VaccinationsValuesUpdateToOneWithWhereWithoutVaccinationsInputObjectSchema } from './VaccinationsValuesUpdateToOneWithWhereWithoutVaccinationsInput.schema';
import { VaccinationsValuesUpdateWithoutVaccinationsInputObjectSchema } from './VaccinationsValuesUpdateWithoutVaccinationsInput.schema';
import { VaccinationsValuesUncheckedUpdateWithoutVaccinationsInputObjectSchema } from './VaccinationsValuesUncheckedUpdateWithoutVaccinationsInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.VaccinationsValuesUpdateOneRequiredWithoutVaccinationsNestedInput>;
export const VaccinationsValuesUpdateOneRequiredWithoutVaccinationsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => VaccinationsValuesCreateWithoutVaccinationsInputObjectSchema), z.lazy(() => VaccinationsValuesUncheckedCreateWithoutVaccinationsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => VaccinationsValuesCreateOrConnectWithoutVaccinationsInputObjectSchema).optional().optional(), upsert: z.lazy(() => VaccinationsValuesUpsertWithoutVaccinationsInputObjectSchema).optional().optional(), connect: z.lazy(() => VaccinationsValuesWhereUniqueInputObjectSchema).optional().optional(), update: z.union([z.lazy(() => VaccinationsValuesUpdateToOneWithWhereWithoutVaccinationsInputObjectSchema), z.lazy(() => VaccinationsValuesUpdateWithoutVaccinationsInputObjectSchema), z.lazy(() => VaccinationsValuesUncheckedUpdateWithoutVaccinationsInputObjectSchema)]).optional()
}).strict() as SchemaType;
