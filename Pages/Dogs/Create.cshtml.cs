using DogAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

public class DogsCreateModel : PageModel
{
    private readonly HttpClient _httpClient;

    public DogsCreateModel(IHttpClientFactory httpClientFactory)
    {
        _httpClient = httpClientFactory.CreateClient("DogAPI");
    }

    [BindProperty]
    public Dog? Dog { get; set; }

    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid) return Page();

        await _httpClient.PostAsJsonAsync("api/dogs", Dog);
        return RedirectToPage("Index");
    }
}