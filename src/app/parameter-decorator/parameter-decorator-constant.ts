import {InjectionToken} from '@angular/core';
import {InjectModuleService} from './inject/inject-module.service';
import {SkipSelfModuleService} from './skipself/skip-self-module.service';

export const TOKEN_INJECT_CLASS_PROVIDER = new InjectionToken<InjectModuleService>('TOKEN_INJECT_CLASS_PROVIDER');

export const TOKEN_SKIP_SELF_CLASS_PROVIDER = new InjectionToken<SkipSelfModuleService>('TOKEN_SKIP_SELF_CLASS_PROVIDER');
