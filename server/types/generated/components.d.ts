import type { Schema, Struct } from '@strapi/strapi';

export interface HeroProfile extends Struct.ComponentSchema {
  collectionName: 'components_hero_profiles';
  info: {
    displayName: 'profile';
    icon: 'user';
  };
  attributes: {
    profile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero.profile': HeroProfile;
    }
  }
}
