import * as migration_20260910_063816_brand_logos_upload from './20260910_063816_brand_logos_upload';
import * as migration_20260910_070950_about_description_rich_text from './20260910_070950_about_description_rich_text';
import * as migration_20260910_074116_organise_service_editor_and_images from './20260910_074116_organise_service_editor_and_images';
import * as migration_20260911_071529_boiler_option_images from './20260911_071529_boiler_option_images';
import * as migration_20260911_081103_boiler_option_content_fields from './20260911_081103_boiler_option_content_fields';
import * as migration_20260911_081956_boiler_option_popular_choice from './20260911_081956_boiler_option_popular_choice';
import * as migration_20260911_084711_about_page_payload_fields from './20260911_084711_about_page_payload_fields';

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
    name: '20260910_074116_organise_service_editor_and_images',
  },
  {
    up: migration_20260911_071529_boiler_option_images.up,
    down: migration_20260911_071529_boiler_option_images.down,
    name: '20260911_071529_boiler_option_images',
  },
  {
    up: migration_20260911_081103_boiler_option_content_fields.up,
    down: migration_20260911_081103_boiler_option_content_fields.down,
    name: '20260911_081103_boiler_option_content_fields',
  },
  {
    up: migration_20260911_081956_boiler_option_popular_choice.up,
    down: migration_20260911_081956_boiler_option_popular_choice.down,
    name: '20260911_081956_boiler_option_popular_choice',
  },
  {
    up: migration_20260911_084711_about_page_payload_fields.up,
    down: migration_20260911_084711_about_page_payload_fields.down,
    name: '20260911_084711_about_page_payload_fields',
  },
];
