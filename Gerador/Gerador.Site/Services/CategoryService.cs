using Gerador.Site.Models.Category;

namespace Gerador.Site.Services;

public class CategoryService : ServiceBase
{
    public CategoryService( IndexedDB indexedDB ) : base( indexedDB )
    {
    }

    public async Task Add( NewCategoryModel category )
    {
        Context.Categories.Add(
            new CategoryModel
            {
                Guid = Guid.NewGuid(),
                Name = category.Name,
                Anchor = category.Anchor
            }
        );
    }

    public async Task<IEnumerable<CategoryModel>> GetAll()
    {
        return Context.Categories;
    }
}