export const schema = {
    "allOf": [{
        "type": "object",
        "required": ["peerAddress", "peerAsNumber", "shutdown"],
        "properties": {
            "address": {"type": "string", "nullable": true, "format": "ip"},
            "peerAddress": {"type": "string", "format": "ip"},
            "asNumber": {"type": "integer", "minimum": 0, "maximum": 4294967295, "nullable": true},
            "peerAsNumber": {"type": "integer", "minimum": 0, "maximum": 4294967295},
            "routerId": {"type": "string", "format": "ip", "nullable": true},
            "shutdown": {"type": "boolean"}
        }
    }, {"type": "object", "properties": {"password": {"type": "string", "minimum": 8, "nullable": true}}}]
}
wn
":{"
type
":"
boolean
"}}},{"
type
":"
object
","
properties
":{"
password
":{"
type
":"
string
","
minimum
":8,"
nullable
":true}}}]}