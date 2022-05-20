export function css(template: TemplateStringsArray, ...params: string[]) {
  return template.join(` `) + params.join(` `);
}
