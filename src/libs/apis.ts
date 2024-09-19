import sanityClient from "./sanity";
import * as queries from "./sanityQueries";
import { Room } from "@/models/room";

export async function getFeatureRoom() {
  const result = await sanityClient.fetch<Room>(
    queries.getFeaturedRoomQuery,
    {},
    {
      cache: "no-cache",
    }
  );

  return result;
}

export async function getRooms() {
  const result = await sanityClient.fetch<Room[]>(queries.getRoomsQuery);
  return result;
}

export async function getRoom(slug: string) {
  const result = await sanityClient.fetch<Room>(
    queries.getRoom,
    { slug },
    { cache: "no-cache" }
  );

  return result;
}
