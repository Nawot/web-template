import phpserver from 'gulp-connect-php'

export function server()
{
    const browsersync =  plugins.browsersync

    if(usePHP)
    {
        phpserver.server(
        {
            port: 8000,
            keepalive: true,
            base: path.dist_folder,
        }, function ()
        {
            browsersync.init(
            {
                proxy: 'localhost:8000',
                port: 8000,
                notify: true
            })
        })
    }
    else
    {
        browsersync.init(
        {
            server:
            {
                baseDir: path.dist_folder,
            },
            port: 8000,
            notify: true
        })
    }
}
