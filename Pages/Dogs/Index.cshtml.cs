using DogAPI.Models;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Net.Http.Json;

public class DogsIndexModel : PageModel
{
    private readonly HttpClient _httpClient;

    public DogsIndexModel(IHttpClientFactory httpClientFactory)
    {
        _httpClient = httpClientFactory.CreateClient("DogAPI");
    }

    public List<Dog> Dogs { get; set; } = new();

    public async Task OnGetAsync()
    {
        Dogs = await _httpClient.GetFromJsonAsync<List<Dog>>("api/dogs") ?? new List<Dog>();
    }
}