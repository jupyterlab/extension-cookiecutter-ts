import json
import os.path as osp

HERE = osp.abspath(osp.dirname(__file__))

with open(osp.join(HERE, 'static', 'package.json')) as fid:
    pdata = json.load(fid)

__version__ = pdata['version']
