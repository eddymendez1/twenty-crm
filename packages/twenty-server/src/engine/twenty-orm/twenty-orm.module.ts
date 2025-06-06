import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FeatureFlagModule } from 'src/engine/core-modules/feature-flag/feature-flag.module';
import { DataSourceModule } from 'src/engine/metadata-modules/data-source/data-source.module';
import { ObjectMetadataEntity } from 'src/engine/metadata-modules/object-metadata/object-metadata.entity';
import { PermissionsModule } from 'src/engine/metadata-modules/permissions/permissions.module';
import { UserWorkspaceRoleEntity } from 'src/engine/metadata-modules/role/user-workspace-role.entity';
import { WorkspaceFeatureFlagMapCacheModule } from 'src/engine/metadata-modules/workspace-feature-flag-map-cache.service.ts/workspace-roles-feature-flag-map-cache.module';
import { WorkspaceMetadataCacheModule } from 'src/engine/metadata-modules/workspace-metadata-cache/workspace-metadata-cache.module';
import { WorkspaceRolesPermissionsCacheModule } from 'src/engine/metadata-modules/workspace-roles-permissions-cache/workspace-roles-permissions-cache.module';
import { entitySchemaFactories } from 'src/engine/twenty-orm/factories';
import { EntitySchemaFactory } from 'src/engine/twenty-orm/factories/entity-schema.factory';
import { TwentyORMGlobalManager } from 'src/engine/twenty-orm/twenty-orm-global.manager';
import { TwentyORMManager } from 'src/engine/twenty-orm/twenty-orm.manager';
import { WorkspaceCacheStorageModule } from 'src/engine/workspace-cache-storage/workspace-cache-storage.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature(
      [ObjectMetadataEntity, UserWorkspaceRoleEntity],
      'metadata',
    ),
    DataSourceModule,
    WorkspaceCacheStorageModule,
    WorkspaceMetadataCacheModule,
    PermissionsModule,
    WorkspaceRolesPermissionsCacheModule,
    WorkspaceFeatureFlagMapCacheModule,
    FeatureFlagModule,
  ],
  providers: [
    ...entitySchemaFactories,
    TwentyORMManager,
    TwentyORMGlobalManager,
  ],
  exports: [EntitySchemaFactory, TwentyORMManager, TwentyORMGlobalManager],
})
export class TwentyORMModule {}
