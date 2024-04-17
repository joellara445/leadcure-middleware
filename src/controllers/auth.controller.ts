'option explicit';
async function clean(req:any, res:any) {
    console.log('Cleaning up leads'+req);
    console.log('Cleaning up leads'+res);
}

module.exports = {
    clean
};