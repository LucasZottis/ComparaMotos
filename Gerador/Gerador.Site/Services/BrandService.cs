using Gerador.Site.Models.Brand;

namespace Gerador.Site.Services;

public class BrandService : ServiceBase
{
    public async Task Add( NewBrandModel newBrand )
    {
        Context.Brands.Add(
            new BrandModel { 
                Guid = Guid.NewGuid(),
                Name = newBrand.Name,
                Path = newBrand.Path,
            }
        );
    }
}