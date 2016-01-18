page.base('');

page('/', homeController.index);
page('/about', aboutController.index);
page('/projects', projectController.index);
page('/employment', employmentController.index);

page();
