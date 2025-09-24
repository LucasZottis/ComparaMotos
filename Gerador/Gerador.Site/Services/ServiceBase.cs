using Microsoft.AspNetCore.Components;

namespace Gerador.Site.Services;

public class ServiceBase
{
    //protected IndexedDB Context { get; private set; }

    //protected ServiceBase(IndexedDB Context)
    //{

    //}

    [Inject]
    public IndexedDB Context { get; set; }
}