import * as migration_20260910_063816_brand_logos_upload from './20260910_063816_brand_logos_upload';
import * as migration_20260910_070950_about_description_rich_text from './20260910_070950_about_description_rich_text';
import * as migration_20260910_074116_organise_service_editor_and_images from './20260910_074116_organise_service_editor_and_images';

export const migrations = [
  {
    up: migration_20260910_063816_brand_logos_upload.up,
    down: migration_20260910_063816_brand_logos_upload.down,
    name: '20260910_063816_brand_logos_upload',
  },
  {
    up: migration_20260910_070950_about_description_rich_text.up,
    down: migration_20260910_070950_about_description_rich_text.down,
    name: '20260910_070950_about_description_rich_text',
  },
  {
    up: migration_20260910_074116_organise_service_editor_and_images.up,
    down: migration_20260910_074116_organise_service_editor_and_images.down,
    name: '20260910_074116_organise_service_editor_and_images'
  },
];
