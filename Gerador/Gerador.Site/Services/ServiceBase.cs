namespace Gerador.Site.Services;

public class ServiceBase
{
    protected IndexedDB Context { get; private set; }

    public ServiceBase( IndexedDB indexedDB )
    {
        Context = indexedDB;
    }
}