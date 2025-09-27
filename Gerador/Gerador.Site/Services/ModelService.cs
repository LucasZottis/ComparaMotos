using Gerador.Site.Models.Models;

namespace Gerador.Site.Services;

public class ModelService : ServiceBase
{
    public ModelService( IndexedDB indexedDB ) : base( indexedDB )
    {
    }

    public async Task<IEnumerable<ModelModel>> GetModelsByBrandGuid(Guid guid)
    {
        var brand = Context.Brands.FirstOrDefault( b => b.Guid == guid );

        if ( brand == null )
            throw new Exception( "Não há marca com esse guid" );

        return await Task.FromResult( brand.Models );
    }
}