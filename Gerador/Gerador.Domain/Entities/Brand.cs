namespace Gerador.Domain.Entities;

public class Brand
{
    public string Path { get; set; }

    public string Name { get; set; }

    public ICollection<Model> Models { get; set; } = [];
}