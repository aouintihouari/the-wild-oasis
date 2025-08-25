import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
  const { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) throw new Error("Cabins could not be loaded.");
  return cabins;
};

export const createEditCabin = async (newCabin, id) => {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  let query = supabase.from("cabins");
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  const { data, error } = await query.select().single();
  if (error) throw new Error("Cabin could not be created.");
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  if (storageError) {
    if (data?.[0]?.id)
      await supabase.from("cabins").delete().eq("id", data[0].id);
    throw new Error(
      "Cabin image could not be uploaded and cabin was not created."
    );
  }
  return data;
};

export const deleteCabinApi = async (id) => {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) throw new Error("Cabin could not be deleted.");
};
