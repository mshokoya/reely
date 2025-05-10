import { useAuth } from "@/core/providers/auth/auth_context";
import { tenantResidencesRoute } from "../routes";
import { Header } from "@/components/header";
import { PropertyCard } from "@/components/card";

export const Residences = () => {
  const {user: tenant} = useAuth()
  const currentResidences = tenantResidencesRoute.useLoaderData() as Property[];

  return (
    <div className="dashboard-container">
      <Header
        title="Current Residences"
        subtitle="View and manage your current living spaces"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentResidences?.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            isFavorite={tenant?.favorites.includes(property.id) || false}
            onFavoriteToggle={() => {}}
            showFavoriteButton={false}
            propertyLink={`/tenants/residences/${property.id}`}
          />
        ))}
      </div>
      {(!currentResidences || currentResidences.length === 0) && (
        <p>You don&lsquo;t have any current residences</p>
      )}
    </div>
  );
};