export namespace ToDo {
  export interface CreateSectionDtoIn {
    name: string;
    [k: string]: unknown;
  }
  export interface CountItems {
    items: number;
    [k: string]: unknown;
  }
  export interface SectionEntityWithoutItems {
    id: number;
    name: string;
    _count: ToDo.CountItems;
    [k: string]: unknown;
  }
  export interface ItemEntity {
    id: number;
    name: string;
    sectionId: string;
    category: string;
    [k: string]: unknown;
  }
  export interface SectionEntity {
    id: number;
    name: string;
    items: ToDo.ItemEntity[];
    _count: ToDo.CountItems;
    [k: string]: unknown;
  }
  export interface UpdateSectionDto {
    name?: string;
    [k: string]: unknown;
  }
  export interface CreateItemDto {
    name: string;
    sectionId: number;
    category: string;
    [k: string]: unknown;
  }
  export interface UpdateItemDto {
    name?: string;
    sectionId?: number;
    category?: string;
    [k: string]: unknown;
  }
}

export interface ToDo {
  version: '1';
  routes: {
    '/section': {
      GET: {
        response: ToDo.SectionEntityWithoutItems[];
      };
      POST: {
        body: ToDo.CreateSectionDtoIn;
        response: ToDo.SectionEntityWithoutItems;
      };
    };
    '/section/{id}': {
      GET: {
        params: {
          id: number;
        };
        response: ToDo.SectionEntity;
      };
      DELETE: {
        params: {
          id: number;
        };
        response: ToDo.SectionEntity;
      };
      PATCH: {
        body: ToDo.UpdateSectionDto;
        params: {
          id: number;
        };
        response: ToDo.SectionEntity;
      };
    };
    '/item': {
      GET: {
        query?: {
          sectionId?: number;
        };
        response: ToDo.ItemEntity[];
      };
      POST: {
        body: ToDo.CreateItemDto;
        response: ToDo.ItemEntity;
      };
    };
    '/item/{id}': {
      GET: {
        params: {
          id: number;
        };
        response: ToDo.ItemEntity;
      };
      DELETE: {
        params: {
          id: number;
        };
        response: ToDo.ItemEntity;
      };
      PATCH: {
        body: ToDo.UpdateItemDto;
        params: {
          id: number;
        };
        response: ToDo.ItemEntity;
      };
    };
  };
}
