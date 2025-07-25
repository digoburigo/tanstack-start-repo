/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { MedicationsValuesCreateWithoutMedicationsInputObjectSchema } from './MedicationsValuesCreateWithoutMedicationsInput.schema';
import { MedicationsValuesUncheckedCreateWithoutMedicationsInputObjectSchema } from './MedicationsValuesUncheckedCreateWithoutMedicationsInput.schema';
import { MedicationsValuesCreateOrConnectWithoutMedicationsInputObjectSchema } from './MedicationsValuesCreateOrConnectWithoutMedicationsInput.schema';
import { MedicationsValuesUpsertWithoutMedicationsInputObjectSchema } from './MedicationsValuesUpsertWithoutMedicationsInput.schema';
import { MedicationsValuesWhereUniqueInputObjectSchema } from './MedicationsValuesWhereUniqueInput.schema';
import { MedicationsValuesUpdateToOneWithWhereWithoutMedicationsInputObjectSchema } from './MedicationsValuesUpdateToOneWithWhereWithoutMedicationsInput.schema';
import { MedicationsValuesUpdateWithoutMedicationsInputObjectSchema } from './MedicationsValuesUpdateWithoutMedicationsInput.schema';
import { MedicationsValuesUncheckedUpdateWithoutMedicationsInputObjectSchema } from './MedicationsValuesUncheckedUpdateWithoutMedicationsInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.MedicationsValuesUpdateOneRequiredWithoutMedicationsNestedInput>;
export const MedicationsValuesUpdateOneRequiredWithoutMedicationsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => MedicationsValuesCreateWithoutMedicationsInputObjectSchema), z.lazy(() => MedicationsValuesUncheckedCreateWithoutMedicationsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => MedicationsValuesCreateOrConnectWithoutMedicationsInputObjectSchema).optional().optional(), upsert: z.lazy(() => MedicationsValuesUpsertWithoutMedicationsInputObjectSchema).optional().optional(), connect: z.lazy(() => MedicationsValuesWhereUniqueInputObjectSchema).optional().optional(), update: z.union([z.lazy(() => MedicationsValuesUpdateToOneWithWhereWithoutMedicationsInputObjectSchema), z.lazy(() => MedicationsValuesUpdateWithoutMedicationsInputObjectSchema), z.lazy(() => MedicationsValuesUncheckedUpdateWithoutMedicationsInputObjectSchema)]).optional()
}).strict() as SchemaType;
