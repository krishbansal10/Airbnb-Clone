import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import FavouritesClient from "./FavouritesClient";

import getCurrentUser from "../actions/getCurrentUser";
import getFavouriteListings from "../actions/getFavouriteListings";

const FavouritesPage = async () => {
    const listings = await getFavouriteListings();
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Unauthorised"
                    subtitle="Please login!"
                />
            </ClientOnly>
        )
    }

    if(listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No properties found"
                    subtitle="Looks like you haven't favourited any property"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <FavouritesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default FavouritesPage;