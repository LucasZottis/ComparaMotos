using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace Gerador.Site;

public class IndexedDB
{
    [Inject]
    public IJSRuntime JSRuntime { get; set; }

    public IndexedDB()
    {
        
    }

    public async Task Add(object entity)
    {
        await JSRuntime.InvokeVoidAsync( "indexedDBAdd", entity );
    }
}