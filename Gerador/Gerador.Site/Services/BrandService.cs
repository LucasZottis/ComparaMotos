using Gerador.Site.Models.Brand;

namespace Gerador.Site.Services;

public class BrandService : ServiceBase
{
    public BrandService( IndexedDB indexedDB ) 
        : base( indexedDB ) { }

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

    public async Task<BrandModel> GetByGuid(Guid guid)
    {
        var brand = Context.Brands.FirstOrDefault( b => b.Guid == guid );

        if ( brand == null )
            throw new Exception( "Não há marca com esse guid" );

        return await Task.FromResult( brand );
    }

    public async Task<IEnumerable<BrandModel>> GetAll()
    {
        return Context.Brands;
    }
}