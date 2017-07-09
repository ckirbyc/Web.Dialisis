using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Dialisis.Web.Startup))]
namespace Dialisis.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
