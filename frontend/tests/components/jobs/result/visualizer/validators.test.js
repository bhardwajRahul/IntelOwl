const {
  validateLevel,
} = require("../../../../../src/components/jobs/result/visualizer/validators");

describe("visualizer data validation", () => {
  test("Validate only required fields (one element for each component type) and check validation is recursive", () => {
    const validatedLevel = validateLevel({
      level_position: 1,
      level_size: "3",
      elements: {
        type: "horizontal_list",
        values: [
          {},
          { type: "base" },
          {
            type: "download",
            value: "test.txt",
            payload: "hello, world",
            mimetype: "text/plain",
          },
          { type: "bool", disable: true },
          { type: "title", title: { type: "base" }, value: { type: "base" } },
          { type: "horizontal_list", value: [] },
          { type: "vertical_list", name: { type: "base" }, value: [] },
          { type: "table", columns: [], data: [] },
        ],
      },
    });
    expect(validatedLevel).toStrictEqual({
      levelPosition: 1,
      levelSize: "h3",
      elements: {
        alignment: "around",
        disable: false,
        size: "col-auto",
        type: "horizontal_list",
        values: [
          {
            alignment: "around",
            bold: false,
            color: "bg-undefined",
            copyText: "",
            description: "",
            disable: false,
            icon: "",
            italic: false,
            link: "",
            size: "col-auto",
            type: "base",
            value: "",
          },
          {
            alignment: "around",
            bold: false,
            color: "bg-undefined",
            copyText: "",
            description: "",
            disable: false,
            icon: "",
            italic: false,
            link: "",
            size: "col-auto",
            type: "base",
            value: "",
          },
          {
            addMetadataInDescription: false,
            alignment: "around",
            copyText: "test.txt",
            description: "",
            disable: false,
            link: "",
            size: "col-auto",
            type: "download",
            value: "test.txt",
            payload: "hello, world",
            mimetype: "text/plain",
          },
          {
            activeColor: "danger",
            alignment: "around",
            copyText: "",
            description: "",
            disable: true,
            icon: "",
            italic: false,
            link: "",
            size: "col-auto",
            type: "bool",
            value: "",
          },
          {
            alignment: "around",
            disable: false,
            size: "col-auto",
            title: {
              alignment: "around",
              bold: false,
              color: "bg-undefined",
              copyText: "",
              description: "",
              disable: false,
              icon: "",
              italic: false,
              link: "",
              size: "col-auto",
              type: "base",
              value: "",
            },
            type: "title",
            value: {
              alignment: "around",
              bold: false,
              color: "bg-undefined",
              copyText: "",
              description: "",
              disable: false,
              icon: "",
              italic: false,
              link: "",
              size: "col-auto",
              type: "base",
              value: "",
            },
          },
          {
            alignment: "around",
            disable: false,
            size: "col-auto",
            type: "horizontal_list",
            values: [],
          },
          {
            alignment: "around",
            disable: false,
            name: {
              alignment: "around",
              bold: false,
              color: "bg-undefined",
              copyText: "",
              description: "",
              disable: false,
              icon: "",
              italic: false,
              link: "",
              size: "col-auto",
              type: "base",
              value: "",
            },
            size: "col-auto",
            startOpen: false,
            type: "vertical_list",
            values: [],
          },
          {
            alignment: "around",
            size: "col-auto",
            type: "table",
            columns: [],
            pageSize: undefined,
            sortById: "",
            sortByDesc: false,
            data: [],
            disable: false,
          },
        ],
      },
    });
  });

  test("Validate all fields (one component for each type)", () => {
    const validatedLevel = validateLevel({
      level_position: 1,
      level_size: "5",
      elements: {
        type: "horizontal_list",
        values: [
          {
            type: "base",
            value: "placeholder",
            icon: "it",
            color: "success",
            link: "https://google.com",
            bold: true,
            italic: true,
            disable: false,
            size: "1",
            alignment: "start",
            copy_text: "placeholder",
            description: "description",
          },
          {
            add_metadata_in_description: true,
            type: "download",
            value: "test.txt",
            payload: "hello, world",
            mimetype: "text/plain",
            link: "https://test.com",
            disable: false,
            size: "1",
            alignment: "start",
            copy_text: "test.txt",
            description: "this is a test file",
          },
          {
            type: "bool",
            value: "phishing",
            icon: "hook",
            italic: true,
            link: "https://google.com",
            color: "danger",
            disable: true,
            size: "2",
            alignment: "end",
            copy_text: "phishing",
            description: "description",
          },
          {
            type: "title",
            title: {
              type: "base",
              value: "virus total",
              icon: "virusTotal",
              color: "transparent",
              link: "https://www.virustotal.com",
              bold: true,
              italic: true,
              disable: false,
              size: "1",
              alignment: "center",
              copy_text: "virus total",
              description: "description",
            },
            value: {
              type: "base",
              value: "hits: 0%",
              icon: "it",
              color: "success",
              link: "https://google.com",
              bold: true,
              italic: true,
              disable: false,
              size: "1",
              alignment: "start",
              copy_text: "hits: 0%",
              description: "description",
            },
            disable: true,
            size: "3",
            alignment: "around",
          },
          // no need to check horizontal_list, this is an horizontal list
          {
            type: "vertical_list",
            name: {
              type: "base",
              value: "vlist title",
              icon: "fire",
              color: "danger",
              link: "https://google.com",
              bold: true,
              italic: true,
              disable: false,
              size: "1",
              alignment: "start",
              copy_text: "vlist title",
              description: "description",
            },
            values: [
              {
                type: "base",
                value: "suspicious match",
                icon: "ft",
                color: "warning",
                link: "https://google.com",
                bold: true,
                italic: true,
                disable: false,
                size: "1",
                alignment: "start",
                copy_text: "suspicious match",
                description: "description",
              },
              {
                type: "horizontal_list",
                values: [
                  {
                    type: "base",
                    value: "2nd rule matches: ",
                    color: "primary",
                    bold: true,
                    italic: true,
                    disable: false,
                    copy_text: "2nd rule matches: ",
                    description: "description",
                  },
                  {
                    type: "base",
                    value: "match 1",
                    link: "https://google.com",
                    color: "primary",
                    bold: true,
                    italic: true,
                    disable: false,
                    copy_text: "match 1",
                    description: "description",
                  },
                  {
                    type: "base",
                    value: ",",
                    color: "primary",
                    bold: false,
                    italic: false,
                    disable: false,
                    copy_text: ",",
                    description: "description",
                  },
                  {
                    type: "base",
                    value: "match 2",
                    link: "https://google.com",
                    ccolor: "primary",
                    bold: true,
                    italic: true,
                    disable: false,
                    copy_text: "match 2",
                    description: "description",
                  },
                ],
              },
            ],
          },
          {
            type: "table",
            size: "6",
            alignment: "start",
            columns: [
              {
                name: "column_name",
                max_width: 300,
                description: "test description",
                disable_filters: true,
                disable_sort_by: true,
              },
            ],
            data: [
              {
                column_name: {
                  type: "base",
                  value: "placeholder",
                  icon: "it",
                  color: "success",
                  link: "https://google.com",
                  bold: true,
                  italic: true,
                  disable: false,
                  size: "1",
                  alignment: "start",
                  copy_text: "placeholder",
                  description: "description",
                },
              },
            ],
            page_size: 7,
            sort_by_id: "",
            sort_by_desc: false,
          },
        ],
      },
    });
    expect(validatedLevel).toStrictEqual({
      elements: {
        alignment: "around",
        disable: false,
        size: "col-auto",
        type: "horizontal_list",
        values: [
          {
            alignment: "start",
            bold: true,
            color: "bg-success",
            copyText: "placeholder",
            description: "description",
            disable: false,
            icon: "it",
            italic: true,
            link: "https://google.com",
            size: "col-1",
            type: "base",
            value: "placeholder",
          },
          {
            type: "download",
            value: "test.txt",
            payload: "hello, world",
            mimetype: "text/plain",
            link: "https://test.com",
            disable: false,
            size: "col-1",
            alignment: "start",
            copyText: "test.txt",
            addMetadataInDescription: true,
            description: "this is a test file",
          },
          {
            activeColor: "danger",
            alignment: "end",
            copyText: "phishing",
            description: "description",
            disable: true,
            icon: "hook",
            italic: true,
            link: "https://google.com",
            size: "col-2",
            type: "bool",
            value: "phishing",
          },
          {
            type: "title",
            alignment: "around",
            disable: true,
            size: "col-3",
            title: {
              alignment: "center",
              bold: true,
              color: "bg-undefined",
              copyText: "virus total",
              description: "description",
              disable: false,
              icon: "virusTotal",
              italic: true,
              link: "https://www.virustotal.com",
              size: "col-1",
              type: "base",
              value: "virus total",
            },
            value: {
              alignment: "start",
              bold: true,
              color: "bg-success",
              copyText: "hits: 0%",
              description: "description",
              disable: false,
              icon: "it",
              italic: true,
              link: "https://google.com",
              size: "col-1",
              type: "base",
              value: "hits: 0%",
            },
          },
          {
            type: "vertical_list",
            alignment: "around",
            disable: false,
            name: {
              alignment: "start",
              bold: true,
              color: "bg-danger",
              copyText: "vlist title",
              description: "description",
              disable: false,
              icon: "fire",
              italic: true,
              link: "https://google.com",
              size: "col-1",
              type: "base",
              value: "vlist title",
            },
            size: "col-auto",
            startOpen: false,
            values: [
              {
                alignment: "start",
                bold: true,
                color: "bg-warning",
                copyText: "suspicious match",
                description: "description",
                disable: false,
                icon: "ft",
                italic: true,
                link: "https://google.com",
                size: "col-1",
                type: "base",
                value: "suspicious match",
              },
              {
                alignment: "around",
                disable: false,
                size: "col-auto",
                type: "horizontal_list",
                values: [
                  {
                    alignment: "around",
                    bold: true,
                    color: "bg-primary",
                    copyText: "2nd rule matches: ",
                    description: "description",
                    disable: false,
                    icon: "",
                    italic: true,
                    link: "",
                    size: "col-auto",
                    type: "base",
                    value: "2nd rule matches: ",
                  },
                  {
                    alignment: "around",
                    bold: true,
                    color: "bg-primary",
                    copyText: "match 1",
                    description: "description",
                    disable: false,
                    icon: "",
                    italic: true,
                    link: "https://google.com",
                    size: "col-auto",
                    type: "base",
                    value: "match 1",
                  },
                  {
                    alignment: "around",
                    bold: false,
                    color: "bg-primary",
                    copyText: ",",
                    description: "description",
                    disable: false,
                    icon: "",
                    italic: false,
                    link: "",
                    size: "col-auto",
                    type: "base",
                    value: ",",
                  },
                  {
                    alignment: "around",
                    bold: true,
                    color: "bg-undefined",
                    copyText: "match 2",
                    description: "description",
                    disable: false,
                    icon: "",
                    italic: true,
                    link: "https://google.com",
                    size: "col-auto",
                    type: "base",
                    value: "match 2",
                  },
                ],
              },
            ],
          },
          {
            type: "table",
            size: "col-6",
            alignment: "start",
            columns: [
              {
                name: "column_name",
                maxWidth: 300,
                description: "test description",
                disableFilters: true,
                disableSortBy: true,
              },
            ],
            data: [
              {
                column_name: {
                  type: "base",
                  value: "placeholder",
                  icon: "it",
                  color: "bg-success",
                  link: "https://google.com",
                  bold: true,
                  italic: true,
                  disable: false,
                  size: "col-1",
                  alignment: "start",
                  copyText: "placeholder",
                  description: "description",
                },
              },
            ],
            disable: false,
            pageSize: 7,
            sortById: "",
            sortByDesc: false,
          },
        ],
      },
      levelSize: "h5",
      levelPosition: 1,
    });
  });

  test("Validate invalid params (at least one for each type)", () => {
    const validatedLevel = validateLevel({
      level_position: 1,
      level_size: "2",
      elements: {
        type: "horizontal_list",
        values: [
          {
            type: "base",
            value: null,
            icon: "invalid icon",
            color: "invalid color",
            link: {},
            bold: {},
            italic: {},
            disable: {},
            size: "120",
            alignment: {},
          },
          {
            type: "bool",
            value: undefined,
            icon: "invalid icon",
            color: "invalid",
            link: "https://google.com",
            italic: "yes it's italic!",
            disable: "yes it's disabled",
            size: "120",
            alignment: {},
          },
          {
            type: "vertical_list",
            name: 0,
            values: "invalid",
            start_open: "invalid",
            disable: "yes it's disabled",
            size: "120",
            alignment: {},
          },
          {
            type: "horizontal_list",
            value: "invalid",
            disable: "yes it's disabled",
            size: "120",
            alignment: {},
          },
          {
            type: "title",
            title: 0,
            value: 0,
            disable: "yes it's disabled",
            size: "120",
            alignment: {},
          },
          {
            type: "table",
            page_size: "invalid",
            sort_by_id: "invalid",
            sort_by_desc: "invalid",
            disable: "yes it's disabled",
            size: "120",
            alignment: {},
          },
          {
            type: "download",
            disable: "yes it's disabled",
            size: "120",
            alignment: {},
            value: {},
            mimetype: "nanana",
            payload: {},
            copy_text: {},
            description: {},
            add_metadata_in_description: {},
            link: {},
          },
        ],
      },
    });
    expect(validatedLevel).toStrictEqual({
      elements: {
        alignment: "around",
        disable: false,
        size: "col-auto",
        type: "horizontal_list",
        values: [
          {
            alignment: "around",
            bold: false,
            color: "bg-undefined",
            description: "",
            copyText: "",
            disable: false,
            icon: "invalid icon",
            italic: false,
            link: "{}",
            size: "col-auto",
            type: "base",
            value: "",
          },
          {
            alignment: "around",
            activeColor: "danger",
            description: "",
            copyText: "",
            disable: true,
            icon: "invalid icon",
            italic: true,
            link: "https://google.com",
            size: "col-auto",
            type: "bool",
            value: "",
          },
          {
            alignment: "around",
            disable: true,
            size: "col-auto",
            type: "vertical_list",
            name: {
              alignment: "around",
              bold: false,
              color: "bg-undefined",
              description: "",
              copyText: "",
              disable: false,
              icon: "",
              italic: false,
              link: "",
              size: "col-auto",
              type: "base",
              value: "",
            },
            values: [],
            startOpen: true,
          },
          {
            alignment: "around",
            disable: true,
            size: "col-auto",
            type: "horizontal_list",
            values: [],
          },
          {
            alignment: "around",
            disable: true,
            size: "col-auto",
            type: "title",
            title: {
              alignment: "around",
              bold: false,
              color: "bg-undefined",
              description: "",
              copyText: "",
              disable: false,
              icon: "",
              italic: false,
              link: "",
              size: "col-auto",
              type: "base",
              value: "",
            },
            value: {
              alignment: "around",
              bold: false,
              color: "bg-undefined",
              description: "",
              copyText: "",
              disable: false,
              icon: "",
              italic: false,
              link: "",
              size: "col-auto",
              type: "base",
              value: "",
            },
          },
          {
            alignment: "around",
            disable: true,
            size: "col-auto",
            type: "table",
            pageSize: "invalid",
            sortById: "invalid",
            sortByDesc: true,
            columns: [],
            data: [],
          },
          {
            alignment: "around",
            disable: true,
            size: "col-auto",
            type: "download",
            value: "{}",
            mimetype: "application/octet-stream",
            payload: "{}",
            copyText: "{}",
            description: "{}",
            addMetadataInDescription: false,
            link: "{}",
          },
        ],
      },
      levelPosition: 1,
      levelSize: "h2",
    });
  });
});
