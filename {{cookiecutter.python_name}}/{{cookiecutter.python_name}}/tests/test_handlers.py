import json


async def test_handlers(jp_fetch):
    r = await jp_fetch(
                "{{ cookiecutter.python_name | replace('_', '-') }}/get_example",
            )
    assert r.code == 200
    assert json.loads(r.body.decode())['data'] is not None

    