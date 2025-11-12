import { defineCollection,z } from "astro:content";

const listas = defineCollection({
  schema: z.object ({
    title: z.string(),
    categoria: z.string(),
    precio: z.string(),
    img: z.string(),
    descripcion: z.string(),
    comprar: z.string(),
  })
});

export const collections = {listas};