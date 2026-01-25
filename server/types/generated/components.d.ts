import type { Schema, Struct } from '@strapi/strapi';

export interface HeroAbout extends Struct.ComponentSchema {
  collectionName: 'components_hero_abouts';
  info: {
    displayName: 'about';
    icon: 'briefcase';
  };
  attributes: {
    git_hub: Schema.Attribute.String;
    linkdedin: Schema.Attribute.String;
    T_About: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

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
      'hero.about': HeroAbout;
      'hero.profile': HeroProfile;
    }
  }
}
