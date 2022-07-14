export const schema =  {"allOf":[{"allOf":[{"type":"object","required":["name","type","value","shared"],"properties":{"name":{"type":"string","minLength":1,"maxLength":64,"pattern":"^[a-zA-Z0-9]{3}[a-zA-Z0-9\\-\\_]*$"},"description":{"type":"string","maxLength":255,"nullable":true},"type":{"type":"string","enum":["ip","asn"]},"value":{"type":"array","items":{"type":"string","minLength":1,"maxLength":255}},"shared":{"type":"boolean","default":false}}}]}]}