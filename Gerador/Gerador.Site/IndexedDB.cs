using Gerador.Site.Models.Brand;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace Gerador.Site;

public class IndexedDB
{
    public ICollection<BrandModel> Brands { get; private set; } = [];

    //[Inject]
    //public IJSRuntime JSRuntime { get; set; }

    public async Task Add(object entity)
    {
        //await JSRuntime.InvokeVoidAsync( "indexedDBAdd", entity );
    }

    public async Task Commit()
    {
        await Task.CompletedTask;
    }
}