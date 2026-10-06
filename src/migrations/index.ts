import * as migration_20260910_063816_brand_logos_upload from './20260910_063816_brand_logos_upload';
import * as migration_20260910_070950_about_description_rich_text from './20260910_070950_about_description_rich_text';
import * as migration_20260910_074116_organise_service_editor_and_images from './20260910_074116_organise_service_editor_and_images';
import * as migration_20260911_071529_boiler_option_images from './20260911_071529_boiler_option_images';
import * as migration_20260911_081103_boiler_option_content_fields from './20260911_081103_boiler_option_content_fields';
import * as migration_20260911_081956_boiler_option_popular_choice from './20260911_081956_boiler_option_popular_choice';
import * as migration_20260911_084711_about_page_payload_fields from './20260911_084711_about_page_payload_fields';
import * as migration_20260911_113310_quote_requests from './20260911_113310_quote_requests';
import * as migration_20261006_101312_quote_questions from './20261006_101312_quote_questions';
import * as migration_20261006_122808_quote_question_admin_title from './20261006_122808_quote_question_admin_title';
import * as migration_20261006_134215_seo_meta_image from './20261006_134215_seo_meta_image';

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
  {
    up: migration_20260911_113310_quote_requests.up,
    down: migration_20260911_113310_quote_requests.down,
    name: '20260911_113310_quote_requests',
  },
  {
    up: migration_20261006_101312_quote_questions.up,
    down: migration_20261006_101312_quote_questions.down,
    name: '20261006_101312_quote_questions',
  },
  {
    up: migration_20261006_122808_quote_question_admin_title.up,
    down: migration_20261006_122808_quote_question_admin_title.down,
    name: '20261006_122808_quote_question_admin_title',
  },
  {
    up: migration_20261006_134215_seo_meta_image.up,
    down: migration_20261006_134215_seo_meta_image.down,
    name: '20261006_134215_seo_meta_image'
  },
];
