describe('Skillz', () => {
    let context = (<any>require).context('./', true, /\.spec\.tsx?$/);
    context.keys().forEach(context);
});