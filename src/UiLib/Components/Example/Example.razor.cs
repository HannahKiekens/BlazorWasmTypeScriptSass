using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace UiLib.Components
{
    public partial class Example: ComponentBase
    {
        [Parameter] 
        public string Label { get; set; }

        [Inject]
        IJSRuntime JSRuntime {get; set;}

        private async Task SayHello()
        {
            await JSRuntime.InvokeVoidAsync("UiLib.Example.SayHello", Label);
        }
    }
}