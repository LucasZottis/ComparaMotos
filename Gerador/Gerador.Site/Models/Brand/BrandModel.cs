using Gerador.Site.Models.Models;

namespace Gerador.Site.Models.Brand;

public class BrandModel
{
    public Guid Guid { get; set; }
    public string Name { get; set; }
    public string Path { get; set; }

    public ICollection<ModelModel> Models { get; set; } = [];
}